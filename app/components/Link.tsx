import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export const Link: React.FC<
  React.PropsWithChildren<
    React.HTMLProps<HTMLAnchorElement> & Pick<FontAwesomeIconProps, "icon">
  >
> = ({ children, href, "aria-description": ariaDescription, icon }) => {
  return (
    <a
      href={href}
      className="group px-0 py-4 transition-colors w-full"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="h-5 mr-2 opacity-30 inline group-hover:opacity-80 transition-opacity"
          />
        )}

        <span>{children}</span>

        <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none whitespace-nowrap ml-2">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{ariaDescription}</p>
    </a>
  );
};
