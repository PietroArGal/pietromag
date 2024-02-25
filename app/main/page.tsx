"use client"

import Link from "next/link";

import { motion } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Phone, Linkedin, Github, Send, Mail, Map, Instagram, Facebook, FileText } from "lucide-react";

import {
  ReactOriginal,
  JavascriptOriginal,
  AmazonwebservicesOriginal,
  NodejsOriginal,
  ThreejsOriginal,
  ApachekafkaOriginal,
  DockerOriginal,
  TypescriptOriginal,
  Css3Original,
  Html5Original,
  TailwindcssPlain,
  CsharpOriginal,
  PythonPlain,
  ExpressOriginal,
  GraphqlPlain,
  NextjsOriginal,
  MongodbOriginal,
  MysqlPlain,
  PostgresqlPlain,
  RedisOriginal,
  PhpPlain,
} from "devicons-react";

export default function MainPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.3, delay: 0.3 }}
    >
      <div className="fixed top-3 w-full flex justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Me
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Card className="w-96 border-0">
          <CardHeader className="flex items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://avatars.githubusercontent.com/u/31112762?v=4" />
              <AvatarFallback>PA</AvatarFallback>
            </Avatar>
            <CardTitle>Pietro Aramburú Gallardo</CardTitle>
            <CardDescription>Computer Scientist</CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="personal">
              <TabsList className="grid w-auto grid-cols-2 mx-14">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="work">Work</TabsTrigger>
              </TabsList>

              <TabsContent
                value="personal"
                className="text-center text-base mt-5"
              >
                <h1>
                  I was born with 159 IQ. At the age of 5, I was assembling and using my first computers and at the age of 6 I started programming.
                </h1>
                <h1 className="my-3">
                  I spend several hours a day creating amazing projects.
                </h1>
                <h1 className="my-3">
                  I was a scholarship holder in school and graduated in two technical careers at the age of 17, later I got a scholarship to study Computer Science.
                </h1>
                <div className="flex justify-center gap-2 mt-4">
                  <Badge variant="blue">Age: 22 </Badge>
                  <Badge variant="red">University: Stanford </Badge>
                </div>
              </TabsContent>

              <TabsContent value="work" className="text-center mt-5">


                <div className="my-6">
                  <h1 className="mb-2">Languages</h1>
                  <div className="flex items-center justify-center gap-3">
                    <JavascriptOriginal size="30" />
                    <TypescriptOriginal size="30" />
                    <CsharpOriginal size="30" />
                    <PhpPlain size="30" />
                    <Html5Original size="30" />
                    <Css3Original size="30" />
                    <PythonPlain size="30" />
                  </div>
                </div>

                <div className="my-6">
                  <h1 className="mb-2">Technologies</h1>
                  <div className="flex items-center justify-center gap-3">
                    <NodejsOriginal size="30" />
                    <ReactOriginal size="30" />
                    <ThreejsOriginal size="30" className="fill-white" />
                    <TailwindcssPlain size="30" />
                    <ApachekafkaOriginal size="30" />
                    <ExpressOriginal size="30" className="fill-white" />
                    <NextjsOriginal size="30" className="fill-white" />
                  </div>
                </div>

                  <div className="flex items-center justify-center gap-3">
                    <GraphqlPlain size="30" color="Crimson" />
                    <PostgresqlPlain size="30" />
                    <MongodbOriginal size="30" />
                    <MysqlPlain size="30" />
                    <RedisOriginal size="30" />
                    <DockerOriginal size="30" />
                    <AmazonwebservicesOriginal size="30" />
                  </div>

                <div className="my-6">
                  <div className="flex justify-center gap-2 mt-4">
                    <Badge variant="blue">Spanish: Native </Badge>
                    <Badge variant="red">English: C2 </Badge>
                    <Badge variant="gold">Portuguese: B2 </Badge>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter className="flex justify-center gap-x-3">

          </CardFooter>
        </Card>
      </div>

      <footer className="fixed bottom-8 w-full flex justify-center gap-x-5">
        <Dialog>
          <DialogTrigger>
            <Button className="w-50">
              <Send className="mr-2 h-4 w-4" />Personal Information
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>

              <DialogTitle>Contact</DialogTitle>
              <div></div>
              <DialogDescription className="flex flex-col gap-5">
                <Link href="tel:+51975677451" className="flex gap-1 justify-center">
                  <Phone
                    strokeWidth={1}
                    size={20}
                  />
                  <p className="text-sm">+51 951 613 233</p>
                </Link>
                <Link href="mailto:pietromauag@gmail.com" className="flex gap-1 justify-center">
                  <Mail
                    strokeWidth={1}
                    size={20}
                  />
                  <p className="text-sm">pietroargal@gmail.com</p>
                </Link>
                <Link href="" className="flex gap-1 justify-center cursor-default">
                  <Map
                    strokeWidth={1}
                    size={20}
                  />
                  <p className="text-sm">Lima, Perú - Miraflores</p>
                </Link>
              </DialogDescription>

              <div><br /></div>

              <DialogTitle>Social</DialogTitle>
              <div></div>
              <DialogDescription className="flex gap-3 justify-center">
                <Link href="https://www.linkedin.com/in/pietromag/" target="_blank">
                  <Linkedin
                    strokeWidth={1}
                    size={22}
                    className="hover:fill-white"
                  />
                </Link>
                <Link href="https://www.facebook.com/PietroAg/" target="_blank">
                  <Facebook
                    strokeWidth={1}
                    size={22}
                    className="hover:fill-white"
                  />
                </Link>
                <Link href="https://github.com/PietroArGal" target="_blank">
                  <Github
                    strokeWidth={1}
                    size={22}
                    className="hover:fill-white"
                  />
                </Link>
              </DialogDescription>

              <div><br /></div>

              <DialogDescription>
                <Link href="https://wa.me/51951613233" target="_blank" >
                  <Button className="w-50">
                    <Phone className="mr-2 h-4 w-4" />Whatsapp
                  </Button>
                </Link>

              </DialogDescription>

              <div><br /></div>

              <DialogTitle>Resume - CV</DialogTitle>
              <div></div>
              <DialogDescription>
                <Link href="https://media.licdn.com/dms/document/media/D4E2DAQGeEa2BnqDKUQ/profile-treasury-document-pdf-analyzed/0/1686158576471?e=1697068800&v=beta&t=Yb4XJTMvLAqr4nRBiFKe93Wno55ilUbmO8m7RIflg5M" target="_blank" >
                  <Button variant="outline" className="w-50">
                    <FileText className="mr-2 h-4 w-4" />Show / Download
                  </Button>
                </Link>

              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </footer>
    </motion.div>
  );
}
