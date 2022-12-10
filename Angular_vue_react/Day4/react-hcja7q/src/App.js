import React from 'react';
import './style.css';

function Display() {
  return (
    <>
      <td>1</td>
      <td>2</td>
    </>
  );
}

export default function App() {
  let show = 98;
  const count = 88;
  const hour = new Date().getHours();
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <div>
        {show > 90 ? (
          <p style={{ color: 'green' }}>Green</p>
        ) : show >= 80 ? (
          <p style={{ color: 'blue' }}>blue</p>
        ) : (
          <p style={{ color: 'yellow' }}>yellow</p>
        )}

        {hour > 12 && <div>Good morning</div>}
        {hour > 4 && <div>Good Afternoon</div>}
      </div>
      {count && <h1>Messages: {count}</h1>}
      <p>Start editing to see some magic happen :)</p>

      <table>
        <tr>
          <Display></Display>
        </tr>
      </table>
    </div>
  );
}


