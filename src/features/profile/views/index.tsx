import { Card, Avatar, Typography, Button, Divider, Row, Col } from "antd";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import { useAuth } from "@/hooks/useAuth";

const { Title, Text } = Typography;

function Profile() {
  const { user } = useAuth();

  // Example placeholder data
  const profileData = {
    phone: "+998 90 123 45 67",
    location: "Tashkent, Uzbekistan",
    joinDate: "2023-01-15",
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "80vh" }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={8}>
        <Card
          bordered={false}
          style={{ borderRadius: 16, boxShadow: "0 2px 16px #0001" }}
          bodyStyle={{ padding: 32 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Avatar
              size={96}
              icon={<UserOutlined />}
              style={{ marginBottom: 16 }}
            />
            <Title level={3} style={{ marginBottom: 0 }}>
              {user.name || "User Name"}
            </Title>
            <Text type="secondary">{user.email || "user@email.com"}</Text>
            <Text style={{ marginTop: 8, color: "#2563EB", fontWeight: 500 }}>
              {user.role || "User"}
            </Text>
            <Button
              type="primary"
              icon={<EditOutlined />}
              style={{ marginTop: 16 }}
              disabled>
              Edit Profile
            </Button>
          </div>
          <Divider style={{ margin: "32px 0 16px 0" }} />
          <div style={{ padding: "0 16px" }}>
            <Row gutter={[0, 16]}>
              <Col span={12}>
                <Text strong>Phone:</Text>
              </Col>
              <Col span={12}>
                <Text>{profileData.phone}</Text>
              </Col>
              <Col span={12}>
                <Text strong>Location:</Text>
              </Col>
              <Col span={12}>
                <Text>{profileData.location}</Text>
              </Col>
              <Col span={12}>
                <Text strong>Joined:</Text>
              </Col>
              <Col span={12}>
                <Text>{profileData.joinDate}</Text>
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default Profile;
