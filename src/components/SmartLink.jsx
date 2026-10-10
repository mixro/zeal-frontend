import { Link, NavLink } from 'react-router-dom';
import { preloadRoute } from '../lib/routes';

// Router links that start downloading the target page on hover, focus or touch.
const handlers = (to, props) => ({
  onMouseEnter: (e) => {
    preloadRoute(to);
    props.onMouseEnter?.(e);
  },
  onFocus: (e) => {
    preloadRoute(to);
    props.onFocus?.(e);
  },
  onTouchStart: (e) => {
    preloadRoute(to);
    props.onTouchStart?.(e);
  },
});

export function SmartLink({ to, ...props }) {
  return <Link to={to} {...props} {...handlers(to, props)} />;
}

export function SmartNavLink({ to, ...props }) {
  return <NavLink to={to} {...props} {...handlers(to, props)} />;
}
