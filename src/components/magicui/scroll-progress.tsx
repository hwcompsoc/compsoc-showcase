"use client"

import { m as motion, useScroll, useSpring, useTransform, useMotionTemplate, useMotionValueEvent, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

interface ScrollProgressProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof MotionProps
> {
  ref?: React.Ref<HTMLDivElement>
  container?: React.RefObject<HTMLElement | null>
  onPosition?: (value:number) => void
}

export function ScrollProgress({
  className,
  ref,
  container,
  onPosition,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll({container})
  const smooth = useSpring(scrollYProgress, {stiffness:300,damping:40})
  const percent = useTransform(smooth, value => value * 100)
  const width = useMotionTemplate`${percent}%`
  useMotionValueEvent(scrollYProgress, "change", value => onPosition?.(Math.round(value * 100)))

  return (
    <motion.div
      ref={ref}
      className={cn(
        "absolute left-0 top-0 h-1 bg-[#004066]",
        className
      )}
      style={{
        width,
      }}
      {...props}
    />
  )
}
