import React, {useMemo} from 'react';
import Link, {LinkProps} from "next/link";

interface NaLinkProps extends Omit<LinkProps, 'href'> {
    href: LinkProps['href'];
    currentPath?: string;
    fallbackLink?: React.ReactNode;
    children?: React.ReactNode;
}

const NALink = ({ currentPath, fallbackLink, children, ...linkProps }: NaLinkProps) => {
    return useMemo(() => {
        if (linkProps.href) {
            const splitHref = linkProps.href.toString().split("/");
            const lastHrefPath = splitHref[splitHref.length - 1];

            if (lastHrefPath && currentPath?.includes(lastHrefPath)) {
                return fallbackLink || <>{children}</>;
            }
        }

        return <Link {...linkProps}>{children}</Link>;
    }, [linkProps, children, currentPath, fallbackLink]);
};

export default NALink;