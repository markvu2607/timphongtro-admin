import { MouseEvent } from "react";
import { Button, useNotify, useRecordContext, useRefresh } from "react-admin";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useMutation } from "@tanstack/react-query";

import apiClient from "../api-client";
import { EPostStatus, EReportStatus } from "../enums";
import { WEB_URL } from "../env";

export const ApproveButton = () => {
  const record = useRecordContext();
  const notify = useNotify();
  const refresh = useRefresh();

  const { mutate: resolve, isPending } = useMutation({
    mutationFn: async () => {
      if (!record) {
        throw new Error("Record not found");
      }
      await apiClient.post(`/reports/${record.id}/resolve`);
    },
    onSuccess: () => {
      notify("Đã xử lý thành công", { type: "info" });
      refresh();
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || error.message;
      notify(`Error: ${message}`, { type: "error" });
    },
  });

  const handleClickResolved = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    resolve();
  };

  if (record?.status !== EReportStatus.PENDING) {
    return null;
  }

  return (
    <Button label="Đã xử lý" onClick={handleClickResolved} disabled={isPending}>
      <CheckIcon />
    </Button>
  );
};

export const RejectButton = () => {
  const record = useRecordContext();
  const notify = useNotify();
  const refresh = useRefresh();

  const { mutate: reject, isPending } = useMutation({
    mutationFn: async () => {
      if (!record) {
        throw new Error("Record not found");
      }
      await apiClient.post(`/reports/${record.id}/reject`);
    },
    onSuccess: () => {
      notify("Đã từ chối thành công", { type: "info" });
      refresh();
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || error.message;
      notify(`Error: ${message}`, { type: "error" });
    },
  });

  const handleReject = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    reject();
  };

  if (record?.status !== EReportStatus.PENDING) {
    return null;
  }

  return (
    <Button label="Từ chối" onClick={handleReject} disabled={isPending}>
      <CloseIcon />
    </Button>
  );
};

export const ViewPostButton = () => {
  const record = useRecordContext();

  if (!record?.post || record?.post.status !== EPostStatus.PUBLISHED) {
    return null;
  }

  return (
    <Button
      label="Xem bài viết"
      onClick={(event) => {
        event.stopPropagation();
        window.open(
          `${WEB_URL}/posts/${record?.post.id}`,
          "_blank",
          "noopener,noreferrer",
        );
      }}
    />
  );
};
