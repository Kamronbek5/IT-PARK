import { ConfigProvider } from "antd";

const AntdProvider = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#166199",
                    borderRadius: 6,
                },
                components: {
                    Layout: {
                        siderBg: "#166199",
                        headerBg: "#fff",
                    },
                },
            }}>
            {children}
        </ConfigProvider>
    );
};

export default AntdProvider;
