/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/static-property-placement */

"use client";

import React from "react";
import { EditorContext, EditableArea } from "@magnolia/react-editor";

interface ExpanderInteractiveState {
  isCollapsed: boolean;
}
interface ExpanderInteractiveProps {
  renderer: any; // Assuming RendererType is the type/interface of your renderer property
  accordionHeader: any;
  // other props if any
}

class ExpanderInteractive extends React.Component<
  ExpanderInteractiveProps,
  ExpanderInteractiveState
> {
  static contextType = EditorContext;

  constructor(props: any) {
    super(props);
    this.state = { isCollapsed: false };
    this.toggle = this.toggle.bind(this);
  }

  state = { isCollapsed: false };

  toggle(event: any) {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
    event.preventDefault();
  }

  render() {
    const { renderer, accordionHeader } = this.props;
    const { isCollapsed }: any = this.state;
    return (
      <div
        data-testid="accordion-content"
        className="border-b-2 rounded-md mb-1"
      >
        <div className="flex-row">
          <button
            type="button"
            className="text-black w-full p-4 text-left transition duration-300 flex items-center justify-between"
            onClick={(e) => {
              e.preventDefault();
              this.setState({ isCollapsed: !isCollapsed });
            }}
          >
            {accordionHeader && (
              <EditableArea
                className="text-xl text-black p-1  font-dmserif font-semibold"
                content={accordionHeader}
              />
            )}

            <svg
              data-accordion-icon
              className={`float-right w-3 h-3 rotate-180 shrink-0 ${
                isCollapsed ? "!rotate-180" : "!rotate-0"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 7"
            >
              <path
                stroke="#522367"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </div>

        {isCollapsed && (
          <div
            data-testid="accordion-content"
            className="text-black pl-4 bg-white"
          >
            {renderer}
          </div>
        )}
      </div>
    );
  }
}

export default ExpanderInteractive;
