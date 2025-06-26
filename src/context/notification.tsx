// src/providers/notification.provider.tsx

import React, { createContext, useContext } from "react";
import { notification } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

interface NotificationContextType {
  notify: (args: any) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotificationContext must be used within a NotificationProvider"
    );
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [api, contextHolder] = notification.useNotification();

  const notify = (args: any) => {
    let icon = args.icon;
    const key = `custom-notification-${Date.now()}`;
    switch (args.type) {
      case "success":
        icon = (
          <CheckCircleOutlined
            className="text-xl"
            style={{ color: "#22c55e" }}
          />
        );
        break;
      case "error":
        icon = (
          <CloseCircleOutlined
            className="text-xl"
            style={{ color: "#ef4444" }}
          />
        );
        break;
      case "info":
        icon = (
          <InfoCircleOutlined
            className="text-xl"
            style={{ color: "#3b82f6" }}
          />
        );
        break;
      case "warning":
        icon = (
          <ExclamationCircleOutlined
            className="text-xl"
            style={{ color: "#f59e0b" }}
          />
        );
        break;
    }
    const content = (
      <div className="custom-notification-body relative flex items-start gap-4">
        <div>{icon}</div>
        <div>
          <div className="custom-notification-title font-semibold text-lg">
            {args.message}
          </div>
          <div className="custom-notification-description text-xs text-base-400">
            {args.description}
          </div>
        </div>
        <button
          onClick={() => api.destroy(key)}
          className="absolute top-0 right-0 p-1 text-base-500 hover:text-base-700">
          <CloseOutlined />
        </button>
      </div>
    );
    api.open({
      key,
      ...args,
      icon: null,
      message: null,
      description: content,
      className: "custom-notification",
      closeIcon: null,
      duration: args.duration || 5,
    });
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};
