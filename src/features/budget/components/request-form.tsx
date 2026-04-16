"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FileText, Plus } from "lucide-react";
import { getBranch } from "@/lib/branch";
import { useRequest } from "../hooks/useRequest";

const items = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

const RequestForm = () => {
  const [branches, setBranches] = useState<{ id: string; name: string }[]>([]);
  const { createRequest, loading } = useRequest();

  const [form, setForm] = useState({
    name: "",
    amount: "",
    nominal: "",
    priority: "",
    branch_id: "",
    date: new Date().toISOString(),
    file_id: null,
  });

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const data = await getBranch();
        setBranches(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load branch");
      }
    };

    fetchBranches();
  }, []);

  const handleSubmit = async () => {
    if (
      !form.amount ||
      !form.name ||
      !form.nominal ||
      !form.priority ||
      !form.branch_id
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    const payload = {
      name: form.name,
      amount: Number(form.amount),
      nominal: Number(form.nominal),
      priority: form.priority,
      branch_id: form.branch_id,
      file_id: form.file_id,
      date: new Date().toISOString(),
    };

    await createRequest(payload);

    toast.success("Request added successfully!");

    setForm({
      name: "",
      amount: "",
      nominal: "",
      priority: "",
      branch_id: "",
      date: new Date().toISOString(),
      file_id: null,
    });
  };

  const formatNominal = (value: number | string) => {
    if (!value) return "";

    const number =
      typeof value === "string" ? parseInt(value.replace(/\D/g, "")) : value;

    if (isNaN(number)) return "";

    return new Intl.NumberFormat("id-ID").format(number);
  };

  const handleNominal = (value: string) => {
    const raw = value.replace(/\D/g, "");

    setForm({
      ...form,
      nominal: raw,
    });
  };

  return (
    <div className="p-8 max-w-xl">
      <div className="bg-white p-6 rounded-lg border space-y-4">
        <div className="flex gap-2 items-center">
          <FileText className="w-12 h-12 text-purple-500 bg-purple-200 p-3 rounded-lg" />
          <div>
            <h1 className="font-semibold">Request Form</h1>
            <p className="text-sm text-gray-400">
              Submit a new expense request for approval
            </p>
          </div>
        </div>

        <Select
          value={form.branch_id}
          onValueChange={(value) => {
            if (!value) return;

            setForm((prev) => ({
              ...prev,
              branch_id: value,
            }));
          }}
        >
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Select Branch">
              {branches.find((b) => b.id === form.branch_id)?.name}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Branches</SelectLabel>
              {branches.map((branch) => (
                <SelectItem key={branch.id} value={branch.id}>
                  {branch.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input
          placeholder="Item name (e.g Pembelian ATK Bulanan)"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          placeholder="Amount"
          type="number"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <Input
          placeholder="Nominal (e.g 150000)"
          type="text"
          value={form.nominal ? `Rp ${formatNominal(form.nominal)}` : ""}
          onChange={(e) => handleNominal(e.target.value)}
        />

        <Select
          value={form.priority}
          onValueChange={(value) => {
            if (!value) return;
            setForm((prev) => ({ ...prev, priority: value }));
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Priority">
              {items.find((item) => item.value === form.priority)?.label}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          placeholder="Date"
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <div className="flex justify-between">
          <Button onClick={handleSubmit} disabled={loading}>
            <Plus />
            Submit Request
          </Button>
          <Button>Add Invoice</Button>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
