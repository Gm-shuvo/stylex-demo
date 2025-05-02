import * as stylex from "@stylexjs/stylex";
import { Button } from "./ui/Button/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/Dialog/Dialog";

const buttonOverrite = stylex.create({
  base: {
    borderRadius: "40px",
    color: "red",
    marginLeft: "20px",
  },
});

const buttonOverrite2 = stylex.create({
  base: {
    borderRadius: "40px",
    color: "red",
    marginLeft: "20px",
  },
});

const dialogStyles = stylex.create({
  title: {
    color: "Black",
    backgroundColor: "white"
  },
});

const Dashboard = () => {
  return (
    <div>
      <Button variant="primary" size="sm" iconLeft="🔍" loading>
        Primary
      </Button>

      <Button
        variant="primary"
        size="sm"
        iconLeft="🔍"
        style={{ marginLeft: 12 }}
      >
        Primary
      </Button>

      <Button variant="secondary" size="md" style={{ marginLeft: 12 }}>
        secondary
      </Button>

      <Button
        variant="secondary"
        size="md"
        styleX={[buttonOverrite.base, buttonOverrite2.base]}
      >
        overrite secondary
      </Button>

      <Button variant="outline" size="lg" style={{ marginLeft: 12 }}>
        Outline
      </Button>
      <Button variant="ghost" size="lg" style={{ marginLeft: 12 }}>
        Ghost
      </Button>
      <Button variant="link" size="lg" style={{ marginLeft: 12 }}>
        <a href="XXXXXXXXXXX" target="_blank">
          Link
        </a>
      </Button>
      <Button variant="unstyled" size="lg" style={{ marginLeft: 12 }}>
        Unstyled
      </Button>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle styleX={dialogStyles.title}>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              file.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <Button variant="destructive">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
