import React from "react";
import Card from "@material-tailwind/react/Card";
import Haus1 from "../assets/img/haus1.jpg";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import { BsHouseFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";

export default function CardLosts() {
  return (
    <div className=" max-w-full pt-5 md:px-8 h-auto">
      <div className=" pt-2 pb-18 rounded-lg shadow-lg-red bg-gradient-to-tr from-blue-300 to-red-400 container mx-auto max-w-full max-h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 ">
          <div className="px-4 mb-10">
            <Card>
              <CardImage src={Haus1} alt="Card house" />
              <CardBody>
                <H6 color="black">Card Title</H6>
                <Paragraph color="black">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </Paragraph>
              </CardBody>
              <ul>
                <li className="flex items-center px-4">
                  {" "}
                  <BsHouseFill /> <p className="pl-4">Id:1 </p>
                </li>
                <li className="flex items-center px-4">
                  {" "}
                  <AiFillDollarCircle /> <p className="pl-4">valor: R$ 00,00</p>
                </li>
                <li className="flex items-center px-4">
                  {" "}
                  <FaExternalLinkSquareAlt />{" "}
                  <p className="pl-4">Área: 0 Km² </p>
                </li>
                <li className="flex items-center px-4">
                  {" "}
                  <HiOutlineStatusOnline />{" "}
                  <p className="pl-4">Disponibilidade: Desativado </p>
                </li>
              </ul>
              <CardFooter>
                <Button color="lightBlue" size="lg" ripple="light">
                  Editar{" "}
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="px-4 mb-10">
            <Card>
              <CardImage src={Haus1} alt="Card house" />
              <CardBody>
                <H6 color="black">Card Title</H6>
                <Paragraph color="black">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </Paragraph>
              </CardBody>
              <ul>
                <li className="flex items-center px-4">
                  {" "}
                  <BsHouseFill /> <p className="pl-4">Id: 2</p>
                </li>
                <li className="flex items-center px-4">
                  {" "}
                  <AiFillDollarCircle /> <p className="pl-4">valor: R$ 00,00</p>
                </li>
                <li className="flex items-center px-4">
                  {" "}
                  <FaExternalLinkSquareAlt />{" "}
                  <p className="pl-4">Área: 0 Km² </p>
                </li>
                <li className="flex items-center px-4">
                  {" "}
                  <HiOutlineStatusOnline />{" "}
                  <p className="pl-4">Disponibilidade: Desativado </p>
                </li>
              </ul>
              <CardFooter>
                <Button color="lightBlue" size="lg" ripple="light">
                  Editar{" "}
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="px-4 mb-10">
            <Card>
              <CardImage src={Haus1} alt="Card house" />
              <CardBody>
                <H6 color="black">Card Title</H6>
                <Paragraph color="black">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </Paragraph>
              </CardBody>
              <ul>
                <li className="flex items-center px-4">
                  {" "}
                  <BsHouseFill /> <p className="pl-4">Id: 3 </p>
                </li>
                <li className="flex items-center px-4">
                  {" "}
                  <AiFillDollarCircle /> <p className="pl-4">valor: R$ 00,00</p>
                </li>
                <li className="flex items-center px-4">
                  {" "}
                  <FaExternalLinkSquareAlt />{" "}
                  <p className="pl-4">Área: 0 Km² </p>
                </li>
                <li className="flex items-center px-4">
                  {" "}
                  <HiOutlineStatusOnline />{" "}
                  <p className="pl-4">Disponibilidade: Desativado </p>
                </li>
              </ul>
              <CardFooter>
                <Button color="lightBlue" size="lg" ripple="light">
                  Editar{" "}
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="px-4 mb-10">
            <Card>
              <CardImage src={Haus1} alt="Card house" />
              <CardBody>
                <H6 color="black">Card Title</H6>
                <Paragraph color="black">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </Paragraph>
              </CardBody>
              <ul>
                <li className="flex items-center px-4">
                  {" "}
                  <BsHouseFill /> <p className="pl-4">Id: 4 </p>
                </li>
                <li className="flex items-center px-4">
                  {" "}
                  <AiFillDollarCircle /> <p className="pl-4">valor: R$ 00,00</p>
                </li>
                <li className="flex items-center px-4">
                  {" "}
                  <FaExternalLinkSquareAlt />{" "}
                  <p className="pl-4">Área: 0 Km² </p>
                </li>
                <li className="flex items-center px-4">
                  {" "}
                  <HiOutlineStatusOnline />{" "}
                  <p className="pl-4">Disponibilidade: Desativado </p>
                </li>
              </ul>
              <CardFooter>
                <Button color="lightBlue" size="lg" ripple="light">
                  Editar
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
