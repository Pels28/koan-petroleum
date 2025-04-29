import Button from "@/components/Button";
import Chip from "@/components/Chip";
import Input from "@/components/Input";

const Subscribe = () => {
  return (
    <div className="h-[250px] space-y-3 bg-tertiary p-10">
      <Chip>
        <div className="flex flex-row items-center gap-4">
          <span className="rounded-full bg-primary h-2 w-2"></span>
          <span className="font-montserrat">Subscribe</span>
          <span className="rounded-full bg-primary h-2 w-2"></span>
        </div>
      </Chip>
      <div className="grid grid-cols-2 gap-10 place-items-center">
        <div className="text-5xl font-montserrat">
          <span className="text-primary">Subscribe</span>&nbsp;{" "}
          <span className="text-secondary">To Get Latest Update from Us</span>
        </div>

        <div className="font-montserrat space-y-2 w-full">
        <p>Email alerts sign up!</p>
        <div className="flex w-full flex-row items-start justify-start gap-2">
            <Input className="w-[70%]" radius="full" type="email" labelPlacement="inside" label="Your Email" size="md"/>
            <Button className="font-montserrat w-[150px]" size="lg" radius="full" color="primary">Sign Up!</Button>
        </div>
      </div>
      </div>


    </div>
  );
};

export default Subscribe;
