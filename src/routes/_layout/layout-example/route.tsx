import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/layout-example')({
  component: LayoutExample,
})

export default function LayoutExample() {
  return <div>LayoutExample page</div>
}
