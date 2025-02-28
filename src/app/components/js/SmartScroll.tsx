"use client";

import { useEffect } from "react";

type ScrollOptions = {
    speed?: number;
    addActive?: boolean;
    activeClass?: string;
    offset?: number;
};

const SmartScroll = ({ options = {} as ScrollOptions }: { options?: ScrollOptions }) => {
    useEffect(() => {
        const defaultOptions: ScrollOptions = {
            speed: options.speed || 500,
            addActive: options.addActive !== false,
            activeClass: options.activeClass || "active",
            offset: options.offset || 20,
        };

        const links = document.querySelectorAll("[data-scroll]");

        if (links.length === 0) {
            console.error("data-scroll attribute must be added");
            return;
        }

        const handleScroll = (event: Event) => {
            event.preventDefault();
            const targetId = (event.currentTarget as HTMLElement).getAttribute("data-scroll")?.replace(/^#+/, "");
            const targetElement = targetId ? document.getElementById(targetId) : null;

            if (!targetElement) {
                console.error(`id: ${targetId} cannot be found. Make sure [data-scroll] matches an element ID.`);
                return;
            }

            window.scrollTo({
                top: targetElement.offsetTop - defaultOptions.offset!,
                behavior: "smooth",
            });
        };

        const updateActiveLink = () => {
            let scrollPosition = window.scrollY;
            links.forEach((link) => {
                const targetId = link.getAttribute("data-scroll")?.replace(/^#+/, "");
                const targetElement = targetId ? document.getElementById(targetId) : null;
                if (targetElement) {
                    if (scrollPosition >= targetElement.offsetTop - defaultOptions.offset! - 100) {
                        link.parentElement?.classList.add(defaultOptions.activeClass!);
                        // Ensure childNodes are properly cast as Elements before accessing classList
                        link.parentElement?.parentElement?.childNodes.forEach((sibling) => {
                            if (sibling.nodeType === Node.ELEMENT_NODE) {
                                (sibling as Element).classList.remove(defaultOptions.activeClass!);
                            }
                        });
                    }
                }
            });
        };

        links.forEach((link) => {
            link.addEventListener("click", handleScroll);
        });

        if (defaultOptions.addActive) {
            updateActiveLink();
            window.addEventListener("scroll", updateActiveLink);
        }

        return () => {
            links.forEach((link) => {
                link.removeEventListener("click", handleScroll);
            });
            window.removeEventListener("scroll", updateActiveLink);
        };
    }, [options]);

    return null; // No UI needed
};

export default SmartScroll;
