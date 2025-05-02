import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'
import * as stylex from '@stylexjs/stylex'
import { styles } from './dialog.stylex'

function Dialog(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />
}

function DialogTrigger(props: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger {...props} />
}

function DialogPortal(props: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal {...props} />
}

function DialogOverlay({
  styleX,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay> & { styleX?: stylex.StyleXStyles }) {
  return <DialogPrimitive.Overlay {...stylex.props(styles.overlay, styleX)} {...props} />
}

function DialogContent({
  children,
  styleX,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & { styleX?: stylex.StyleXStyles }) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content {...stylex.props(styles.content, styleX)} {...props}>
        {children}
        <DialogPrimitive.Close {...stylex.props(styles.closeButton)}>
          <XIcon />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogClose({
  styleX,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close> & { styleX?: stylex.StyleXStyles }) {
  return <DialogPrimitive.Close {...stylex.props(styles.closeButton, styleX)} {...props} />
}

function DialogHeader({
  styleX,
  ...props
}: React.ComponentProps<'div'> & { styleX?: stylex.StyleXStyles }) {
  return <div {...stylex.props(styles.header, styleX)} {...props} />
}

function DialogFooter({
  styleX,
  ...props
}: React.ComponentProps<'div'> & { styleX?: stylex.StyleXStyles }) {
  return <div {...stylex.props(styles.footer, styleX)} {...props} />
}

function DialogTitle({
  styleX,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title> & { styleX?: stylex.StyleXStyles }) {
  return <DialogPrimitive.Title {...stylex.props(styles.title, styleX)} {...props} />
}

function DialogDescription({
  styleX,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description> & { styleX?: stylex.StyleXStyles }) {
  return <DialogPrimitive.Description {...stylex.props(styles.description, styleX)} {...props} />
}

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
