import React from 'react'
import Circle from '../circle'

export default function Paws({colors}) {
  return (
    <>
      {/* Right top paw */}
      <Circle width={135} height={155} bgColor={colors.grey} bottom="705px" right="85px" />
      <Circle width={50} height={65} bgColor={colors.grey} bottom="825px" right="230px" rotation="-25deg" />
      <Circle width={50} height={75} bgColor={colors.grey} bottom="875px" right="165px" rotation="-10deg" />
      <Circle width={50} height={75} bgColor={colors.grey} bottom="875px" right="95px" rotation="10deg" />
      <Circle width={50} height={65} bgColor={colors.grey} bottom="825px" right="20px" rotation="25deg" />

      {/* Right middle paw */}
      <Circle width={135} height={155} bgColor={colors.grey} bottom="360px" right="385px" />
      <Circle width={50} height={65} bgColor={colors.grey} bottom="480px" right="530px" rotation="-25deg" />
      <Circle width={50} height={75} bgColor={colors.grey} bottom="530px" right="465px" rotation="-10deg" />
      <Circle width={50} height={75} bgColor={colors.grey} bottom="530px" right="395px" rotation="10deg" />
      <Circle width={50} height={65} bgColor={colors.grey} bottom="480px" right="320px" rotation="25deg" />

      {/* Right bottom paw */}
      <Circle width={135} height={155} bgColor={colors.grey} bottom="15px" right="85px" />
      <Circle width={50} height={65} bgColor={colors.grey} bottom="135px" right="230px" rotation="-25deg" />
      <Circle width={50} height={75} bgColor={colors.grey} bottom="185px" right="165px" rotation="-10deg" />
      <Circle width={50} height={75} bgColor={colors.grey} bottom="185px" right="95px" rotation="10deg" />
      <Circle width={50} height={65} bgColor={colors.grey} bottom="135px" right="20px" rotation="25deg" />
    </>
  )
}


      // {/* Left top paw */}
      // <Circle width={135} height={155} bgColor={colors.grey} bottom="705px" left="85px" />
      // <Circle width={50} height={65} bgColor={colors.grey} bottom="825px" left="230px" rotation="25deg" />
      // <Circle width={50} height={75} bgColor={colors.grey} bottom="875px" left="165px" rotation="10deg" />
      // <Circle width={50} height={75} bgColor={colors.grey} bottom="875px" left="95px" rotation="-10deg" />
      // <Circle width={50} height={65} bgColor={colors.grey} bottom="825px" left="20px" rotation="-25deg" />

      // {/* Left middle paw */}
      // <Circle width={135} height={155} bgColor={colors.grey} bottom="360px" left="285px" />
      // <Circle width={50} height={65} bgColor={colors.grey} bottom="480px" left="430px" rotation="25deg" />
      // <Circle width={50} height={75} bgColor={colors.grey} bottom="530px" left="365px" rotation="10deg" />
      // <Circle width={50} height={75} bgColor={colors.grey} bottom="530px" left="295px" rotation="-10deg" />
      // <Circle width={50} height={65} bgColor={colors.grey} bottom="480px" left="220px" rotation="-25deg" />

      // {/* Left bottom paw */}
      // <Circle width={135} height={155} bgColor={colors.grey} bottom="15px" left="85px" />
      // <Circle width={50} height={65} bgColor={colors.grey} bottom="135px" left="230px" rotation="25deg" />
      // <Circle width={50} height={75} bgColor={colors.grey} bottom="185px" left="165px" rotation="10deg" />
      // <Circle width={50} height={75} bgColor={colors.grey} bottom="185px" left="95px" rotation="-10deg" />
      // <Circle width={50} height={65} bgColor={colors.grey} bottom="135px" left="20px" rotation="-25deg" />