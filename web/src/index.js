import * as ADK from '@symphony-ui/adk';

const backendUri = 'http://localhost:8080/bdk/v1/app';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const getAppToken = () => fetch(`${backendUri}/auth`, { method: 'POST' })
  .then(r => r.json())
  .then(r => r.appToken);

const validateAppToken = (appToken, symphonyToken) =>
  fetch(`${backendUri}/tokens`, { method: 'POST', body: JSON.stringify({ appToken, symphonyToken }), headers })
    .then(r => null);

const validateJwt = (jwt) =>
  fetch(`${backendUri}/jwt`, { method: 'POST', body: JSON.stringify({ jwt }), headers })
    .then(r => r.json());

const config = {
  id: 'localhost-4000',
  circleOfTrust: { getAppToken, validateAppToken, validateJwt },
};

ADK.start(config).then(() => {
  ADK.navigation.add('My App', () => ADK.modules.open('view-abc', { title: 'Hello' }));
});
