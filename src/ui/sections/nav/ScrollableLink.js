import React from 'react';
import { ScrollElement, ScrollLink } from 'react-scroll';
import Link from "next/link";

const Element = (props) => {
  return (
    <div {...props} ref={(el) => { props.parentBindings.domNode = el; }}>
      {props.children}
    </div>
  );
};

export const ScrollableElement = ScrollElement(Element);

const LinkWrap = (props) => {
  return (
    <Link {...props}>
      {props.children}
    </Link>
  );
};

export const ScrollableLink = ScrollLink(LinkWrap);