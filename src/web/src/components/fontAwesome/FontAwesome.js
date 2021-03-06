import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faPaperPlane,
  faBuilding,
  faBox,
  faFile,
  faCog,
  faCaretSquareLeft,
  faCaretSquareRight,
  faChevronDown,
  faChevronUp,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

// Font Awesome Setup
const FA = () => {
  library.add(
    faHome,
    faPaperPlane,
    faBuilding,
    faBox,
    faFile,
    faCog,
    faCaretSquareLeft,
    faCaretSquareRight,
    faChevronDown,
    faChevronUp,
    faPlus
  );
};

export default FA;
