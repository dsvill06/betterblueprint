import React from "react";
import { betterblue, logo, fulllogo, jola, bg2 } from "../assets";
import { Link, useLocation } from 'react-router-dom';

const path = window.location.pathname


const Footer = () => {
 

  return (
    <footer class={`bg-eerieBlack ${path == '/contactUs' ? 'w-[715px]': ''} md:w-full`}>
      <div class=" w-full  p-4 py-6 lg:py-8">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="mb-6 md:mb-0">
            <a class="flex items-center">
              <img
                src={bg2}
                class="me-3 h-20"
                alt="Better Blueprint Consulting Logo"
              />
              <div>
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-flashWhite flex-wrap-reverse">
                  Better Blueprint
                </span>
                <span className="self-center text-2xl font-semibold text-flashWhite "> Consulting</span>
              </div>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-3 sm:gap-3 sm:grid-cols-2">
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-silver">
                Resources
              </h2>
              <ul class="text-flashWhite font-medium">
                <li class="mb-4">
                  <a href="/contactUs" class="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/aboutUs" class="hover:underline">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-silver uppercase">
                Contact Information
              </h2>
              <ul class="text-flashWhite font-medium">
                <li class="mb-4 overflow-hidden">
                  <a href="mailto: betterblueprintconsulting@gmail.com" class="hover:underline">
                    betterblueprintconsulting@gmail.com
                  </a>
                </li>
                <li>
                919-884-1213
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-flashWhite sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-center">
          <span class="text-sm text-taupe sm:text-center ">
            © 2023{" "}
              Better Blueprint Consulting. All Rights Reserved. Designed By David Villavicencio
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
