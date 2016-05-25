import React, { Component } from 'react';
import InputCred from '../containers/InputCred';
import SubmitButton from '../containers/SubmitButton';

const AliCredentialBlock = () => (
  <div>
    <h3>上传秘钥信息</h3>
    <table>
      <tbody>
        <InputCred name="region" />
        <InputCred name="accessKeyId" />
        <InputCred name="accessKeySecret" />
        <InputCred name="bucket"/>
      </tbody>
    </table>
    <SubmitButton />
  </div>
)

export default AliCredentialBlock;
