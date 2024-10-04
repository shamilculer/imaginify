/* eslint-disable no-unused-vars */
import { IImage } from "@/lib/database/models/image.model";

declare global {
  // ====== USER PARAMS
  type CreateUserParams = {
    clerkId: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    photo: string;
  };

  type UpdateUserParams = {
    firstName: string;
    lastName: string;
    username: string;
    photo: string;
  };

  // ====== IMAGE PARAMS
  type AddImageParams = {
    image: {
      title: string;
      publicId: string;
      transformationType: string;
      width: number;
      height: number;
      config: any;
      secureURL: string;
      transformationURL: string;
      aspectRatio: string | undefined;
      prompt: string | undefined;
      color: string | undefined;
    };
    userId: string;
    path: string;
  };

  type UpdateImageParams = {
    image: {
      _id: string;
      title: string;
      publicId: string;
      transformationType: string;
      width: number;
      height: number;
      config: any;
      secureURL: string;
      transformationURL: string;
      aspectRatio: string | undefined;
      prompt: string | undefined;
      color: string | undefined;
    };
    userId: string;
    path: string;
  };

  type Transformations = {
    restore?: boolean;
    fillBackground?: boolean;
    remove?: {
      prompt: string;
      removeShadow?: boolean;
      multiple?: boolean;
    };
    recolor?: {
      prompt?: string;
      to: string;
      multiple?: boolean;
    };
    removeBackground?: boolean;
  };

  // ====== TRANSACTION PARAMS
  type CheckoutTransactionParams = {
    plan: string;
    credits: number;
    amount: number;
    buyerId: string;
  };

  type CreateTransactionParams = {
    stripeId: string;
    amount: number;
    credits: number;
    plan: string;
    buyerId: string;
    createdAt: Date;
  };

  type TransformationTypeKey =
    | "restore"
    | "fill"
    | "remove"
    | "recolor"
    | "removeBackground";

  // ====== URL QUERY PARAMS
  type FormUrlQueryParams = {
    searchParams: string;
    key: string;
    value: string | number | null;
  };

  type UrlQueryParams = {
    params: string;
    key: string;
    value: string | null;
  };

  type RemoveUrlQueryParams = {
    searchParams: string;
    keysToRemove: string[];
  };

  type SearchParamProps = {
    params: { id: string; type: TransformationTypeKey };
    searchParams: { [key: string]: string | string[] | undefined };
  };

  type TransformationFormProps = {
    action: "Add" | "Update";
    userId: string;
    type: TransformationTypeKey;
    creditBalance: number;
    data?: IImage | null;
    config?: Transformations | null;
  };

  type TransformedImageProps = {
    image: any;
    type: string;
    title: string;
    transformationConfig: Transformations | null;
    isTransforming: boolean;
    hasDownload?: boolean;
    setIsTransforming?: React.Dispatch<React.SetStateAction<boolean>>;
  };
}
