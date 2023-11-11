"use client"
import {useEffect} from "react";


export function animateOnScroll() {
    useEffect(
        () => {
            const allDivsElement = document.querySelectorAll('div')
            const customeDivObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach(
                        (entry) => {
                            if(entry.isIntersecting) {
                                console.log("entry is intersecting", entry.target.className)
                                entry.target.classList.add('animate')
                                customeDivObserver.unobserve(entry.target)
                            }
                            else {
                                entry.target.classList.remove('animate'); // Remove class when out of view
                            }
                        }
                    )
                }
            )
            allDivsElement.forEach((divElement) => {customeDivObserver.observe(divElement)})
        },
        []
    )
}
