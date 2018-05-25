import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>This is not the page you were looking for</h1>
    404! - <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;
