import * as stylex from "@stylexjs/stylex";
import { Button } from "./ui/Button/Button";

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

const Dashboard = () => {
  return (
    <div>
      <Button variant="primary" size="sm" iconLeft="🔍" loading>
        Primary
      </Button>

      <Button variant="primary" size="sm" iconLeft="🔍" style={{ marginLeft: 12 }}>
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
    </div>
  );
};

export default Dashboard;
