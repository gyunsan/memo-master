import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";



export default function Nav({children}) {
  return (
    <Navbar>
      <NavbarBrand>
        <img src="/logo.svg" alt="Memo Master" width={40} height={40} />
        <p className="font-bold text-tiny">Memo Master</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        
        <NavbarItem>
          <Button as={Link}  href="#" color="default" variant="faded">
            Sign Out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
