import { MouseEvent } from "react";
import { Button, useNotify, useRecordContext, useRefresh } from "react-admin";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../api-client";
import { EPostStatus } from "../enums";

export const ApproveButton = () => {
  const record = useRecordContext();
  const notify = useNotify();
  const refresh = useRefresh();

  const { mutate: approve, isPending } = useMutation({
    mutationFn: async () => {
      if (!record) {
        throw new Error("Record not found");
      }
      await apiClient.post(`/posts/${record.id}/approve`);
    },
    onSuccess: () => {
      notify("Approved successfully", { type: "info" });
      refresh();
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || error.message;
      notify(`Error: ${message}`, { type: "error" });
    },
  });

  const handleApprove = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    approve();
  };

  if (record?.status !== EPostStatus.REVIEWING) {
    return null;
  }

  return (
    <Button label="Approve" onClick={handleApprove} disabled={isPending}>
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
      await apiClient.post(`/posts/${record.id}/reject`);
    },
    onSuccess: () => {
      notify("Rejected successfully", { type: "info" });
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

  if (record?.status !== EPostStatus.REVIEWING) {
    return null;
  }

  return (
    <Button label="Reject" onClick={handleReject} disabled={isPending}>
      <CloseIcon />
    </Button>
  );
};