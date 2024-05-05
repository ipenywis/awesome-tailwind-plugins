import "./App.css";
import { WithDaisyUi } from "./plugins/tailwind-daisyui";
import { WithMembers } from "./plugins/tailwind-members";
import { WithMixins, WithoutMixins } from "./plugins/tailwind-mixins";
import {
  TailwindAdvancedSignals,
  WithTailwindSignals,
  WithoutTailwindSignals,
} from "./plugins/tailwind-signals";

function App() {
  // return <TailwindAdvancedSignals />;
  // return <WithoutTailwindSignals />;
  // return <WithoutMixins />;
  // return <WithMixins />;
  return <WithMembers />;
  // return <WithDaisyUi />;
}

export default App;
