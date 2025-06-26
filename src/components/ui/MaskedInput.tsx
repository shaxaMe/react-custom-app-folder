"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Input, type InputProps } from "antd"
import clsx from "clsx"

interface MaskedInputProps extends Omit<InputProps, "onChange"> {
  mask: string
  maskChar?: string | null
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputRef?: React.Ref<any>
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  mask = "+998 (99) 999-99-99",
  maskChar = "_",
  value,
  onChange,
  className,
  inputRef,
  ...rest
}) => {
  const [displayValue, setDisplayValue] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0)
  const internalRef = useRef<any>(null)

  const activeRef = inputRef || internalRef


  const createMaskPattern = (mask: string) => {
    const patterns: { [key: string]: RegExp } = {
      "9": /[0-9]/,
      A: /[A-Za-z]/,
      a: /[a-z]/,
      "*": /[A-Za-z0-9]/,
    }

    return mask.split("").map((char, index) => ({
      char,
      isPlaceholder: patterns[char] !== undefined,
      pattern: patterns[char],
      index,
    }))
  }

  const maskPattern = createMaskPattern(mask)


  const applyMask = (inputValue: string) => {
    let result = ""
    let valueIndex = 0

    for (let i = 0; i < maskPattern.length && valueIndex < inputValue.length; i++) {
      const maskItem = maskPattern[i]

      if (maskItem.isPlaceholder) {
        const char = inputValue[valueIndex]
        if (maskItem.pattern && maskItem.pattern.test(char)) {
          result += char
          valueIndex++
        } else if (char && !maskItem.pattern?.test(char)) {
          
          valueIndex++
          i-- 
        } else {
          break
        }
      } else {
        result += maskItem.char
      }
    }

    return result
  }

  const getCleanValue = (maskedValue: string) => {
    let cleanValue = ""
    let maskIndex = 0

    for (let i = 0; i < maskedValue.length && maskIndex < maskPattern.length; i++) {
      const maskItem = maskPattern[maskIndex]

      if (maskItem.isPlaceholder) {
        cleanValue += maskedValue[i]
        maskIndex++
      } else if (maskedValue[i] === maskItem.char) {
        maskIndex++
      } else {
        break
      }
    }

    return cleanValue
  }

  const getStringValue = (val: any) => {
    if (val === undefined || val === null) {
      return ""
    }
    if (typeof val === "bigint" || typeof val === "number") {
      return val.toString()
    }
    return val as string
  }

  useEffect(() => {
    const stringValue = getStringValue(value)
    if (stringValue !== undefined) {
      const masked = applyMask(stringValue)
      setDisplayValue(masked)
    }
  }, [value, mask])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const cursorPos = e.target.selectionStart || 0

    if (inputValue.length < displayValue.length) {
      let newValue = inputValue

      let deletePos = 0
      for (let i = 0; i < Math.min(inputValue.length, displayValue.length); i++) {
        if (inputValue[i] !== displayValue[i]) {
          deletePos = i
          break
        }
      }

      if (deletePos < maskPattern.length && !maskPattern[deletePos]?.isPlaceholder) {
        for (let i = deletePos - 1; i >= 0; i--) {
          if (maskPattern[i]?.isPlaceholder) {
            newValue = inputValue.slice(0, i) + inputValue.slice(i + 1)
            break
          }
        }
      }

      const cleanValue = getCleanValue(newValue)
      const maskedValue = applyMask(cleanValue)

      setDisplayValue(maskedValue)
      setCursorPosition(maskedValue.length)

      if (onChange) {
        const finalValue = mask.replace(/[^A]/g, "").length === mask.length ? cleanValue.toUpperCase() : cleanValue

        const syntheticEvent = {
          ...e,
          target: {
            ...e.target,
            value: finalValue,
          },
        }
        onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>)
      }
    } else {
      const cleanValue = getCleanValue(inputValue)
      const maskedValue = applyMask(cleanValue)

      setDisplayValue(maskedValue)

      let newCursorPos = cursorPos
      if (maskedValue.length > cursorPos && maskPattern[cursorPos] && !maskPattern[cursorPos].isPlaceholder) {
        newCursorPos = cursorPos + 1
      }
      setCursorPosition(newCursorPos)

      if (onChange) {
        const finalValue = mask.replace(/[^A]/g, "").length === mask.length ? cleanValue.toUpperCase() : cleanValue

        const syntheticEvent = {
          ...e,
          target: {
            ...e.target,
            value: finalValue,
          },
        }
        onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>)
      }
    }
  }

  useEffect(() => {
    if (activeRef && typeof activeRef === "object" && activeRef.current && activeRef.current.input) {
      activeRef.current.input.setSelectionRange(cursorPosition, cursorPosition)
    }
  }, [cursorPosition, displayValue, activeRef])

  return (
    <Input
      {...rest}
      ref={activeRef}
      value={displayValue}
      onChange={handleChange}
      className={clsx("custom-input", className)}
    />
  )
}

export default MaskedInput
