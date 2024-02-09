"use client";
import { Header } from "../components/Layout/header";
import { Footer } from "../components/Layout/footer/page";
import { Order } from "../components/sales-point/order/page";

export default function SalesPointPage() {
  return (
    <div className="grid">
      <Order />
    </div>
  );
}
