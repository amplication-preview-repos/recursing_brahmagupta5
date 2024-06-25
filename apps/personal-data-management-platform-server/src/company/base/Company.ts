/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CompanyData } from "../../companyData/base/CompanyData";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { PrivacyAgreement } from "../../privacyAgreement/base/PrivacyAgreement";
import { UserCommunication } from "../../userCommunication/base/UserCommunication";
import { UserRequest } from "../../userRequest/base/UserRequest";

@ObjectType()
class Company {
  @ApiProperty({
    required: false,
    type: () => [CompanyData],
  })
  @ValidateNested()
  @Type(() => CompanyData)
  @IsOptional()
  companyDataItems?: Array<CompanyData>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactInfo!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => [PrivacyAgreement],
  })
  @ValidateNested()
  @Type(() => PrivacyAgreement)
  @IsOptional()
  privacyAgreements?: Array<PrivacyAgreement>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [UserCommunication],
  })
  @ValidateNested()
  @Type(() => UserCommunication)
  @IsOptional()
  userCommunications?: Array<UserCommunication>;

  @ApiProperty({
    required: false,
    type: () => [UserRequest],
  })
  @ValidateNested()
  @Type(() => UserRequest)
  @IsOptional()
  userRequests?: Array<UserRequest>;
}

export { Company as Company };
