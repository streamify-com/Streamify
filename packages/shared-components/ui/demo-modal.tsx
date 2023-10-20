import React, {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { Button, buttonVariants } from "@shared-components/ui/button";
import { cn } from "@shared-components/lib/utils";
import Modal from "@shared-components/ui/modal";
import { Icons } from "@shared-components/graphics/icons";
import { TrailerBackground } from "@shared-components/components/video-player";

interface DemoModalProps {
  children: React.ReactNode;
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
      <div className="md:border-separator bg-background shadow-lg relative z-50 w-full flex-col overflow-hidden md:h-[80%] md:w-[80%] md:rounded-md md:border">
        <Button
          onClick={closeDemoModal}
          className={cn(
            buttonVariants({
              variant: "closeButton",
              size: "closeSize",
            }),
            "text-standard absolute right-0 top-0 z-50 mr-10 mt-6 hidden h-4 w-4 items-center justify-center transition duration-100 md:flex",
          )}
        >
          <Icons.close className="h-4 w-4" />
        </Button>
        {children}
        {/* <TrailerBackground videoUrl="https://3d26876b73d7.us-west-2.playback.live-video.net/api/video/v1/us-west-2.913157848533.channel.rkCBS9iD1eyd.m3u8" /> */}
      </div>
    </Modal>
  );
};

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
        children={undefined}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
