'use client'

import { Button } from "antd";
import { useState, useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { globalStyles } from "../../../styles/globalStyles";

export default function MessagingItemDetails() {
    const { isDarkMode } = useContext(ThemeContext);
    const [isVisible, setIsVisible] = useState(true);



    return (
        <>
            {isVisible && (
                <div className={`sm:w-6/12 border-l rounded-r-[12px] sm:block hidden ${
                    isDarkMode ? `${globalStyles.background.dark} border-[#3A3B3C]`: `${globalStyles.container.card.light} border-gray-200`
                }`}>
                    <div className={`p-4 border-b flex items-center justify-between ${
                        isDarkMode ? "border-[#3A3B3C]" : "border-gray-200"
                    }`}>
                        <h2 className={`text-lg/6 truncate font-semibold ${
                            isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
                        }`}>
                            Item details
                        </h2>
                        <Button
                            size="small"
                            type="link"
                            className="hover:underline"
                            onClick={() => setIsVisible(false)}
                        >
                            Hide details
                        </Button>
                    </div>
                    <div className="p-4">
                        <div className="group relative">
                            <img
                                alt=''
                                src='https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg'
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover h-full"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className={`text-lg font-semibold ${
                                        isDarkMode ? globalStyles.text.primary.dark : "text-gray-700"
                                    }`}>
                                        Men Tshirt
                                    </h3>
                                    <p className={`mt-1 text-md font-medium ${
                                        isDarkMode ? globalStyles.text.primary.dark : "text-gray-900"
                                    }`}>100,000 shs</p>
                                    <p className={`mt-1 text-sm ${
                                        isDarkMode ? globalStyles.text.secondary.dark : "text-gray-500"
                                    }`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit unde.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-[#3A3B3C]">
                            <h3 className={`mt-8 text-lg font-semibold ${
                                isDarkMode ? globalStyles.text.primary.dark : "text-gray-700"
                            }`}>
                                Seller
                            </h3>
                            <div className="mt-2 flex min-w-0 gap-x-4">
                                <img alt="" src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' className="size-8 flex-none rounded-full bg-gray-50" />
                                <div className="min-w-0 flex-auto">
                                    <p className={`text-sm/6 truncate font-semibold ${
                                        isDarkMode ? globalStyles.text.primary.dark : "text-gray-900"
                                    }`}>Jenny Scott</p>
                                    <p className={`truncate text-sm/5 ${
                                        isDarkMode ? globalStyles.text.secondary.dark : "text-gray-500"
                                    }`}>kampala, Uganda</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}