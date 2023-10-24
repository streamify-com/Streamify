import React, {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { Button } from "@shared-components/ui/button";
import Modal from "@shared-components/ui/modal";
import { Icons } from "@shared-components/graphics/icons";

interface DemoModalProps {
  children: ReactNode; // Use ReactNode type for children
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}

const DemoModal: React.FC<DemoModalProps> = ({
  children,
  showDemoModal,
  setShowDemoModal,
}) => {
  const closeDemoModal = () => setShowDemoModal(false);

  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="md:border-separator bg-background relative z-50 w-full flex-col overflow-hidden shadow-lg md:h-[80%] md:w-[80%] md:rounded-md md:border">
        <Button
          onClick={closeDemoModal}
          variant="closeButton"
          size="closeSize"
          className="absolute right-0 top-0 z-50 mr-10 mt-6 hidden md:flex"
        >
          <Icons.close className="h-4 w-4" />
        </Button>
        <div className="h-full overflow-auto">{children}</div>
      </div>
    </Modal>
  );
};

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(
    ({ children }: { children: ReactNode }) => {
      return (
        <DemoModal
          showDemoModal={showDemoModal}
          setShowDemoModal={setShowDemoModal}
        >
          {children}
        </DemoModal>
      );
    },
    [showDemoModal, setShowDemoModal],
  );

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}

export default DemoModal;
