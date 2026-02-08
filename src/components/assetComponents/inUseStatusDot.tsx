function InUseStatusDot({ inUse }: { inUse: boolean }) {
  return (
    <span
      className={`inline-block h-2.5 w-2.5 rounded-full ${
        inUse
          ? 'bg-green-500 shadow-[0_0_6px_1px_rgba(34,197,94,0.6)]'
          : 'bg-red-500 shadow-[0_0_6px_1px_rgba(239,68,68,0.6)]'
      }`}
    />
  )
}

export { InUseStatusDot }
