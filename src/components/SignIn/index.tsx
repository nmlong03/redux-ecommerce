import { Button, Form, Input } from "antd";
import { useSigninMutation } from "../../api/auth";



const SignIn = () => {
    const [signin, {isLoading: isLoadingSignIn}] = useSigninMutation()
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    
    
    const onFinish = (values: any) => {
        signin(values).unwrap().then((data) => {
            console.log(data);
            
            const token = localStorage.setItem('accessToken', data.accessToken);
            const userId = localStorage.setItem('userId', data.user._id);

            
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
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
