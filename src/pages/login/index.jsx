import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { usePostRequest } from "../../hooks/request";
import { Urls } from "../../utils/urls";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
const LoginPage= () => {
  const loginPost = usePostRequest({ url: Urls.auth.login });
  
   const { setTokens } = useContext(UserContext);
  const handlyFinish = async (values) => {
    console.log(values)
    const { success, response, error } = await loginPost.request({
        data: values,
    });
  if (success && !!response) {
    const { accessToken, refreshToken } = response.data;
    localStorage.setItem("accessToken",accessToken)
    localStorage.setItem("refreshToken", refreshToken)
    setTokens(accessToken,refreshToken)
    } else {
        message.error(error);
    }
};
  return (
    <div className="Lopinparent">
      <div className="Login">
      <h1 className="Login__title">Tizimga kirish</h1>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={handlyFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Login!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Login" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your !' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Parol"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
        Kirish
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  )
}

export default LoginPage