"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Plus, Upload } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ModalExpenses = () => {
  const [form, setForm] = useState({
    itemName: "",
    amount: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = async () => {
    if (!form.amount || !form.itemName) {
      toast.error("Please fill in all fields");
      return;
    }

    await new Promise((res) => setTimeout(res, 1000));

    toast.success("Expense added successfully!");

    setForm({
      itemName: "",
      amount: "",
      category: "",
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <h1 className="bg-black px-5 py-2 rounded-2xl text-white ">
          Add Expense
        </h1>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Expense</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          <Input
            placeholder="Expense Name"
            value={form.itemName}
            onChange={(e) => setForm({ ...form, itemName: e.target.value })}
          />
          <Input
            placeholder="Amount"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />
          <Input
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
          <Input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>
        <div className="flex justify-between">
          <Button onClick={handleSubmit}>
            <Plus />
            <span>Add Expense</span>
          </Button>
          <Button>
            <Upload />
            <span>Add Invoice</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalExpenses;
