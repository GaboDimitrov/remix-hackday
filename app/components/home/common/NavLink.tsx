import { Link } from "remix"

const NavLink = ({
  href,
  ariaLabel,
  buttonText,
}: {
  buttonText: string
  href: string
  ariaLabel?: string
}) => (
  <Link
    to={href}
    aria-label={ariaLabel}
  >
    {buttonText}
  </Link>
)

export default NavLink
