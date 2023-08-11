import { Button, Form, Input, message } from "antd";
import { useSigninMutation } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate()
    const [signin, {isLoading: isLoadingSignIn}] = useSigninMutation()    
    const onFinish = (values: any) => {
        signin(values).unwrap().then((data) => {
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('userId', data.user._id);
          messageApi.open({
            type: "success",
            content: "Sign In successfully!",
          });
          setTimeout(() => {
            navigate('/');
            window.location.reload()
        }, 2000);      
      
        }).catch((error) => {
          messageApi.open({
            type: "success",
            content: error.data.message,
            
        });
        })
    };
    
    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    
    type FieldType = {
      username?: string;
      password?: string;
      remember?: string;
      email?: string;
    };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                  {contextHolder}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ margin: 0 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="space-y-6"
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            className="block text-sm font-medium leading-6 text-gray-900"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input className="w-full " />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            className="block text-sm font-medium leading-6 text-gray-900"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password  className=""/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className="bg-blue-500 w-full"
              >
              SignIn
            </Button>
          </Form.Item>
        </Form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            SignUp
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
