import * as React from 'react';
import * as ADKReact from '@symphony-ui/adk-react';
import * as ADK from '@symphony-ui/adk';
import { useEffect, useState } from 'react';
import './view-abc.css';

const ViewA = () => {
  const [ user, setUser ] = useState();

  useEffect(() => {
    ADK.user.getUserInfo().then(response => setUser(response));
  }, []);

  return (
    <div className="main-view">
      <main>
        { user && (
          <div>
            <strong>User</strong>: {user.displayName} ({user.emailAddress})
          </div>
        )}
        <h4>JWT token</h4>
        {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      </main>
    </div>
  );
};

ADKReact.createView(<ViewA />, { id: 'localhost-4000' });
