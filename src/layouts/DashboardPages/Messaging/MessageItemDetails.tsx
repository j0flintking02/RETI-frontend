'use client';

import { Button } from "antd";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { globalStyles } from "../../../styles/globalStyles";

export default function MessagingItemDetails() {
    const [isVisible, setIsVisible] = useState(true);
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <>
            {isVisible && (
                <div className={`sm:w-6/12 border-l sm:block hidden ${globalStyles.container.card.base} ${
                    isDarkMode ? globalStyles.background.dark : globalStyles.container.card.light
                }`}>
                    <div className={`p-4 border-b flex items-center justify-between ${
                        isDarkMode ? 'border-gray-700' : 'border-gray-300'
                    }`}>
                        <h2 className={`${globalStyles.heading.secondary} ${
                            isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
                        }`}>
                            Item details
                        </h2>
                        <Button
                            size="small"
                            type="link"
                            className={`hover:underline ${globalStyles.button.secondary.base} ${
                                isDarkMode ? globalStyles.button.secondary.dark : globalStyles.button.secondary.light
                            }`}
                            onClick={() => setIsVisible(false)}
                        >
                            Hide details
                        </Button>
                    </div>
                    <div className="p-4">
                        <div className="group relative">
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg"
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover h-full"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className={`${globalStyles.heading.secondary} ${
                                        isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
                                    }`}>
                                        Men Tshirt
                                    </h3>
                                    <p className={`mt-1 ${globalStyles.text.primary.base} ${
                                        isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
                                    }`}>
                                        100,000 shs
                                    </p>
                                    <p className={`mt-1 ${globalStyles.text.secondary.base} ${
                                        isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                                    }`}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit unde.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-8 border-t ${
                            isDarkMode ? 'border-gray-700' : 'border-gray-300'
                        }`}>
                            <h3 className={`mt-8 ${globalStyles.heading.secondary} ${
                                isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
                            }`}>
                                Seller
                            </h3>
                            <div className="mt-2 flex min-w-0 gap-x-4">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="size-8 flex-none rounded-full bg-gray-50"
                                />
                                <div className="min-w-0 flex-auto">
                                    <p className={`${globalStyles.text.primary.base} ${
                                        isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
                                    }`}>
                                        Jenny Scott
                                    </p>
                                    <p className={`${globalStyles.text.secondary.base} ${
                                        isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                                    }`}>
                                        kampala, Uganda
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
