import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        base: "max-w-full sm:max-w-[20rem]",
        inputWrapper: "bg-[#FFF8F0] dark:bg-[#1E1E1E] border-[#3D9970] dark:border-[#66BB6A]",
        input: "text-sm text-[#1D3557] dark:text-[#F5F5F5] placeholder:text-[#457B9D] dark:placeholder:text-[#B0BEC5]",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block text-[#457B9D] dark:text-[#B0BEC5]" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search hot sauces..."
      startContent={
        <SearchIcon className="text-base text-[#457B9D] dark:text-[#B0BEC5] pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar 
      maxWidth="xl" 
      position="sticky"
      className="bg-[#FFFFFF] dark:bg-[#1E1E1E] border-b border-[#3D9970] dark:border-[#66BB6A]"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-[#1D3557] dark:text-[#F5F5F5]">HotSauceBay</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          <NavbarItem>
            <NextLink
              className="text-[#457B9D] dark:text-[#B0BEC5] hover:text-[#1D3557] dark:hover:text-[#F5F5F5] transition-colors"
              href="/add"
            >
              Add Sauce
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className="text-[#457B9D] dark:text-[#B0BEC5] hover:text-[#1D3557] dark:hover:text-[#F5F5F5] transition-colors"
              href="/browse"
            >
              Browse
            </NextLink>
          </NavbarItem>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className="text-[#457B9D] dark:text-[#B0BEC5] hover:text-[#1D3557] dark:hover:text-[#F5F5F5] transition-colors"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-4">
          <Link 
            isExternal 
            aria-label="Twitter" 
            href={siteConfig.links.twitter}
            className="text-[#457B9D] dark:text-[#B0BEC5] hover:text-[#1D3557] dark:hover:text-[#F5F5F5] transition-colors"
          >
            <TwitterIcon />
          </Link>
          <Link 
            isExternal 
            aria-label="Discord" 
            href={siteConfig.links.discord}
            className="text-[#457B9D] dark:text-[#B0BEC5] hover:text-[#1D3557] dark:hover:text-[#F5F5F5] transition-colors"
          >
            <DiscordIcon />
          </Link>
          <Link 
            isExternal 
            aria-label="Github" 
            href={siteConfig.links.github}
            className="text-[#457B9D] dark:text-[#B0BEC5] hover:text-[#1D3557] dark:hover:text-[#F5F5F5] transition-colors"
          >
            <GithubIcon />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="bg-[#E63946] hover:bg-[#FF4136] dark:bg-[#FF5252] dark:hover:bg-[#FF1744] text-white text-sm font-semibold rounded-lg transition-colors"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-white" />}
          >
            Sponsor
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link 
          isExternal 
          aria-label="Github" 
          href={siteConfig.links.github}
          className="text-[#457B9D] dark:text-[#B0BEC5] hover:text-[#1D3557] dark:hover:text-[#F5F5F5] transition-colors"
        >
          <GithubIcon />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-[#FFFFFF] dark:bg-[#1E1E1E] pt-6">
        {searchInput}
        <div className="mx-4 mt-4 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <NextLink
                className="text-[#457B9D] dark:text-[#B0BEC5] hover:text-[#1D3557] dark:hover:text-[#F5F5F5] transition-colors w-full"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};