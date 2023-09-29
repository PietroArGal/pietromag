"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail, Phone, Send, Map, CalendarDays } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            <div className="fixed top-3 w-full flex justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/services" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Servicios
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Sobre Mí
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/portfolio" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Portafolio
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <footer className="fixed bottom-8 w-full flex justify-center gap-x-5">
                <Dialog>
                    <DialogTrigger>
                        <Button className="w-50">
                            <Send className="mr-2 h-4 w-4" /> Contácto sin compromiso
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>

                            <DialogTitle>Contacto</DialogTitle>
                            <div className="py-1"></div>
                            <DialogDescription className="flex flex-col gap-3">
                                <Link href="tel:+51975677451" className="flex gap-1 justify-center">
                                    <Phone
                                        strokeWidth={1}
                                        size={20}
                                    />
                                    <p className="text-sm">+51 975 677 451</p>
                                </Link>
                                <Link href="mailto:pietromauag@gmail.com" className="flex gap-1 justify-center">
                                    <Mail
                                        strokeWidth={1}
                                        size={20}
                                    />
                                    <p className="text-sm">pietromauag@gmail.com</p>
                                </Link>
                                <Link href="" className="flex gap-1 justify-center cursor-default">
                                    <Map
                                        strokeWidth={1}
                                        size={20}
                                    />
                                    <p className="text-sm">Lima, Perú - Miraflores</p>
                                </Link>
                            </DialogDescription>

                            <div className="py-2"><br /></div>

                            <DialogTitle>Cotizaciones - Citas</DialogTitle>
                            <div className="py-1"></div>
                            <DialogDescription className="flex justify-center gap-6">
                                <Link href="https://wa.me/51975677451" target="_blank" className="flex flex-col justify-center">
                                    <Button className="w-50">
                                        <Phone className="mr-2 h-4 w-4" />Chat Directo
                                    </Button>
                                    <p className="mt-1">Whatsapp</p>
                                </Link>

                                <Link href="https://calendly.com/pietromag/preguntas-frecuentes" target="_blank" className="flex flex-col justify-center">
                                    <Button className="w-50">
                                        <CalendarDays className="mr-2 h-4 w-4" />Agendar Cita
                                    </Button>
                                    <p className="mt-1">Calendly</p>
                                </Link>

                            </DialogDescription>

                            <div className="py-2"><br /></div>

                            <DialogTitle>Curriculum - CV</DialogTitle>
                            <div></div>
                            <DialogDescription>
                                <Link href="https://media.licdn.com/dms/document/media/D4E2DAQGeEa2BnqDKUQ/profile-treasury-document-pdf-analyzed/0/1686158576471?e=1697068800&v=beta&t=Yb4XJTMvLAqr4nRBiFKe93Wno55ilUbmO8m7RIflg5M" target="_blank" >
                                    <Button variant="outline" className="w-50">
                                        <FileText className="mr-2 h-4 w-4" />Ver / Descargar
                                    </Button>
                                </Link>

                            </DialogDescription>

                            <div><br /></div>

                            <div></div>
                            <DialogDescription className="flex gap-3 justify-center">
                                <Link href="https://www.linkedin.com/in/pietromag/" target="_blank">
                                    <Linkedin
                                        strokeWidth={1}
                                        size={24}
                                        className="hover:fill-white"
                                    />
                                </Link>
                                <Link href="https://github.com/PietroArGal" target="_blank">
                                    <Github
                                        strokeWidth={1}
                                        size={24}
                                        className="hover:fill-white"
                                    />
                                </Link>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </footer >
        </motion.div>
    )
}
