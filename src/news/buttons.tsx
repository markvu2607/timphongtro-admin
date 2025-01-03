import { MouseEvent } from "react";
import { Button, useNotify, useRecordContext, useRefresh } from "react-admin";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../api-client";
import { ENewsStatus } from "../enums";
import { WEB_URL } from "../env";

export const PublishButton = () => {
  const record = useRecordContext();
  const notify = useNotify();
  const refresh = useRefresh();

  const { mutate: publish, isPending } = useMutation({
    mutationFn: async () => {
      if (!record) {
        throw new Error("Record not found");
      }
      await apiClient.post(`/news/${record.id}/publish`);
    },
    onSuccess: () => {
      notify("Đăng bài thành công", { type: "info" });
      refresh();
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || error.message;
      notify(`Error: ${message}`, { type: "error" });
    },
  });

  const handlePublish = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    publish();
  };

  if (record?.status === ENewsStatus.PUBLISHED) {
    return null;
  }

  return (
    <Button label="Đăng bài" onClick={handlePublish} disabled={isPending}>
      <CheckIcon />
    </Button>
  );
};

export const UnpublishButton = () => {
  const record = useRecordContext();
  const notify = useNotify();
  const refresh = useRefresh();

  const { mutate: unpublish, isPending } = useMutation({
    mutationFn: async () => {
      if (!record) {
        throw new Error("Record not found");
      }
      await apiClient.post(`/news/${record.id}/unpublish`);
    },
    onSuccess: () => {
      notify("Bỏ đăng thành công", { type: "info" });
      refresh();
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || error.message;
      notify(`Error: ${message}`, { type: "error" });
    },
  });

  const handleUnpublish = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    unpublish();
  };

  if (record?.status === ENewsStatus.DRAFT) {
    return null;
  }

  return (
    <Button label="Bỏ đăng" onClick={handleUnpublish} disabled={isPending}>
      <CloseIcon />
    </Button>
  );
};

export const ViewButton = () => {
  const record = useRecordContext();

  if (!record || record.status === ENewsStatus.DRAFT) {
    return null;
  }

  return (
    <Button
      label="Xem"
      onClick={(event) => {
        event.stopPropagation();
        window.open(`${WEB_URL}/news/${record.id}`);
      }}
    />
  );
};
