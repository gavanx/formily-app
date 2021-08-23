import React from "react";
import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Password,
  Cascader,
  DatePicker,
  Submit,
  Space,
  FormGrid,
  Upload,
  ArrayItems,
  Editable,
  FormButtonGroup,
} from "@formily/antd";
import { action } from "@formily/reactive";
import { Card, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const form = createForm({
  validateFirst: true,
});

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormGrid,
    FormLayout,
    Input,
    DatePicker,
    Cascader,
    Select,
    Password,
    Space,
    ArrayItems,
    Editable,
  },
  scope: {},
});
const form1 = require("./form1.json");
const schema = require("./schema.json");
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#eee",
        padding: "40px 0",
      }}
    >
      <Card title="SchemaApp" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={console.log}
        >
          <SchemaField schema={form1.schema} />
        </Form>
      </Card>
    </div>
  );
};
