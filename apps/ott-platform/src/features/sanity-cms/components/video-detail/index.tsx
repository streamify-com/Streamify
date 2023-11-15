'use client';

import { SanityDocument } from '@sanity/client';
import MuxPlayer from '@mux/mux-player-react';
import * as React from 'react';
import { PortableText } from '@portabletext/react';
import { usePathname } from 'next/navigation';
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import { absoluteUrl, cn, formatTime } from '@shared-components/lib/utils';
import { PlatformContainer } from '@shared-components/ui/container';
import { Button, buttonVariants } from '@shared-components/ui/button';
import { Separator } from '@shared-components/ui/separator';
import { PlayIcon } from '@shared-components/graphics/icons';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@shared-components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@shared-components/ui/alert-dialog';


interface VideoDetailsProps {
  post: SanityDocument;
}

export default function VideoDetail({ post }: VideoDetailsProps) {
  const pathname = usePathname();
  const shareurl = absoluteUrl(pathname);
  const [showFullStory, setShowFullStory] = React.useState(false);

  const toggleFullStory = () => {
    setShowFullStory(!showFullStory);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-black text-center">
        <PlatformContainer>
          {post?.playbackId ? (
            <MuxPlayer
              streamType="on-demand"
              playbackId={post.playbackId}
              className="relative z-10 h-[30rem]"
              loop
              autoPlay
            />
          ) : null}
        </PlatformContainer>
      </div>
      <PlatformContainer>
        <div className="mx-auto mb-2 mt-4 md:flex md:items-center md:justify-between">
          <div className="text-md text-highlight order-1 font-bold md:text-xl">
            {post.title}
          </div>
          <div className="flex gap-4">
            <Link
              href={`/watch/${post.slug.current}/`}
              className={cn(
                buttonVariants({
                  variant: 'secondaryButton',
                  size: 'headerSize',
                }),
              )}
            >
              <PlayIcon className="h-4 w-4 flex-none" />
              <span className="sm_text ml-3">Cinema player</span>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  aria-label="Share"
                  variant="primaryButton"
                  size="headerSize"
                >
                  Share
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                    <div className="text-md text-standard order-1">
                      <p>absolute: {shareurl}</p>
                    </div>
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    {/* <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    /> */}
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    {/* <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    /> */}
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    variant="primaryButton"
                    size="headerSize"
                  >
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  // aria-label="Cancel subscription"
                  variant="primaryButton"
                  size="headerSize"
                >
                  Cancel
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and cancel your subscription.
                    <div className="text-md text-standard order-1">
                      <p>absolute: {shareurl}</p>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Unsubscribe</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div className="mx-auto my-2 md:flex md:items-center md:justify-between">
          <div className="text-md text-standard order-1">
            {post?.category?.title}
          </div>
          <div className="text-standard order-2 text-sm">
            {formatTime(post.publishedAt)}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-standard px-4">
              Description
            </span>
          </div>
        </div>
        <div className="mt-4">{post?.shortStory}</div>
        <div className="mx-auto my-4 flex flex-col items-center justify-center text-center">
          {!showFullStory && (
            <Button
              className="order-2"
              aria-label="Toggle full story"
              variant="linkButton"
              size="linkSize"
              onClick={toggleFullStory}
            >
              Read full story
            </Button>
          )}
          {showFullStory && post?.fullStory ? (
            <>
              <Button
                className="order-2"
                aria-label="Toggle full story"
                variant="linkButton"
                size="linkSize"
                onClick={toggleFullStory}
              >
                Hide full story
              </Button>
              <div className="mt-8 text-left">
                <PortableText value={post.fullStory} />
              </div>
            </>
          ) : null}
        </div>
      </PlatformContainer>
    </>
  );
}
