import { Button, Form, Input,Select, message } from "antd";
import { IProduct } from "../../../interfaces/product";
import { useGetCategoryQuery } from "../../../api/category";
import {  useGetProductByIdQuery, useUpdateProductMutation } from "../../../api/product";
import { useNavigate, useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
const EditProduct = () => {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate()

  const  {id } = useParams<{ id: string }>();

  const { data: category } = useGetCategoryQuery();
  const [updateProduct] = useUpdateProductMutation();
  const {data: productData} = useGetProductByIdQuery(id || "");  
const [selectedCategoryId, setSelectedCategoryId] = useState('');

const handleCategoryChange = (value: string) => {
  setSelectedCategoryId(value);
  form.setFieldsValue({ categoryId: value });  
};
useEffect(() => {
  form.setFieldsValue(productData);
}, [productData]);
  const onFinish = (values: IProduct) => {
    
    updateProduct({...values, _id: id, categoryId: selectedCategoryId}).unwrap().then(() => {
      messageApi.open({
        type: "success",
        content: "Product updated"
      })
    })
    setTimeout(() => {
        navigate("/admin/product");
    }, 3000);      
  }

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  }
  const options = category?.map((cat) => ({
    value: cat._id,
    label: cat.name,
  }));

  type FieldType = IProduct;
  return (
    <>
      <h2>Add Product</h2>
      {contextHolder}
      <Form
      form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              validator: (_, value) => {
                if (!value) {
                  return Promise.reject("Please input your price!");
                }
                if (value < 1) {
                  return Promise.reject("Price must be greater than 1");
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Description"
          name="desc"
          rules={[{ required: true, message: "Please input description!" }]}
        >
          <TextArea rows={5} />
        </Form.Item>
        
        <Form.Item label="Category" name="categoryName"  >
        <Select
          style={{ width: 120 }}
          options={options}
          value={selectedCategoryId} // Giá trị categoryId được chọn
          onChange={handleCategoryChange} // Hàm xử lý khi lựa chọn thay đổi
        />
        </Form.Item>
        <Form.Item<FieldType>
          label="Image"
          name="image"
          rules={[{ required: true, message: "Please input image!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" className="bg-blue-500" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </>
  );
};

export default EditProduct;
