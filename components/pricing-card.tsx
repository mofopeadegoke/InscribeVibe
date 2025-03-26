import { Button } from "@/components/ui/button";
import "./card.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  popular: boolean;
}

export function PricingCard({
  title,
  price,
  period = "",
  description,
  features,
  buttonText,
  buttonVariant,
  popular,
}: PricingCardProps) {
  return (
    <Card
      className={`flex flex-col ${
        popular ? "border-yellow-500 shadow-lg" : "border-yellow-500/20"
      } bg-gray-800 ${
        title === "Free"
          ? "freePlan"
          : title === "Pro"
          ? "proPlan"
          : "teamsPlan"
      } card`}
    >
      {popular && (
        <div className="rounded-t-lg bg-yellow-500 py-1 text-center text-sm font-medium text-black pop">
          Most Popular
        </div>
      )}
      <CardHeader className={popular ? "" : "pt-6"}>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <div className="flex items-baseline text-white">
          <span className="text-3xl font-bold tracking-tight">{price}</span>
          {period && (
            <span className="ml-1 text-sm font-medium text-gray-400">
              {period}
            </span>
          )}
        </div>
        <CardDescription className="text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="h-5 w-5 flex-shrink-0 text-yellow-500" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4">
        <Button
          className={`w-full ${
            buttonVariant === "default"
              ? "bg-yellow-500 hover:bg-yellow-400 text-black"
              : "border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
          }`}
          variant={buttonVariant}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
