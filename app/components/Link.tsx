import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export const Link: React.FC<
  React.PropsWithChildren<
    React.HTMLProps<HTMLAnchorElement> & Pick<FontAwesomeIconProps, "icon">
  >
> = ({ children, href, "aria-description": ariaDescription, icon }) => {
  return (
    <a
      href={href}
      className="group px-5 py-4 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-row gap-2 justify-start align-middle">
        <h2 className={`mb-3 text-2xl font-semibold inline-flex items-center`}>
          {icon && (
            <>
              <FontAwesomeIcon
                icon={icon}
                className="h-5 mr-2 opacity-30 w-auto inline-block group-hover:opacity-80 transition-opacity"
              />
              &nbsp;
            </>
          )}
          {children}
        </h2>
        <span className="text-2xl transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </div>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{ariaDescription}</p>
    </a>
  );
};